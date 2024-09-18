"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => { },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className="loading">Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className='writeContainer w-full max-w-6xl mx-auto p-4 h-svh sm:p-10'>
      <input
        type="text"
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        className='title mb-2 text-2xl sm:text-3xl xl:text-5xl outline-none border-none bg-transparent placeholder:text-[#b3b3b1] p-2 sm:p-4 w-full'
      />
      <select className="" onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className='editor relative flex flex-col w-full gap-4'>
        <div className='flex gap-2 sm:gap-4 items-center p-2 sm:p-4'>
          <button
            className='btn flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-gray-400 cursor-pointer hover:bg-gray-200/20'
            onClick={() => setOpen(!open)}
          >
            <div className='w-6 h-6 flex justify-center items-center rounded-full'>&#128930;</div>
          </button>

          {open && (
            <div className="add flex justify-center items-center gap-2 sm:gap-4">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className='addBtn flex justify-center items-center w-8 h-8  sm:w-10 sm:h-10 rounded-full bg-transparent border border-[#1a8917] cursor-pointer hover:bg-[#e9f5e7f8]'>
                <label htmlFor="image">
                  <Image src='/image.png' alt="" width={18} height={18} />
                </label>
              </button>
              <button className='addBtn flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-[#1a8917] cursor-pointer hover:bg-[#e9f5e7f8]'>
                <Image src='/external.png' alt="" width={18} height={18} />
              </button>
              <button className='addBtn flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-[#1a8917] cursor-pointer hover:bg-[#e9f5e7f8]'>
                <Image src='/video.png' alt="" width={18} height={18} />
              </button>
            </div>
          )}

          <button onClick={handleSubmit} className='publish ml-auto py-2 px-2 text-sm sm:text-base sm:px-6 rounded bg-[#1a8917] text-white hover:bg-green-700'>
            Publish
          </button>
        </div>

        {/* SimpleBar wrapping ReactQuill */}
        <SimpleBar style={{ maxHeight: '400px' }} className="textArea">
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={(e) => setValue(value)}
            placeholder="Tell your story..."
            className="textArea text-base w-full rounded-lg"
          />
        </SimpleBar>
      </div>
    </div>
  )
};

export default WritePage;
