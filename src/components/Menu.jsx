import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuPosts from './MenuPosts';
import MenuCategories from './MenuCategories';

const Menu = () => {
    return (
        <div className="container hidden sm:block flex-2 mt-6">
            <h2 className="subtitle mt-4 text-sm text-slate-400 font-bold">What's Not</h2>
            <h1 className="title mb-2 text-2xl font-bold">Most Popular</h1>
            <MenuPosts withImage={false} />

            <h2 className="subtitle mt-6 text-sm text-slate-400 font-bold">Discover by topic</h2>
            <h1 className="title mb-2 text-2xl font-bold">Categories</h1>
            <MenuCategories />

            <h2 className="subtitle mt-6 text-sm text-slate-400 font-bold">Chosen by the editor</h2>
            <h1 className="title mb-2 text-2xl font-bold">Editor's choice</h1>
            <MenuPosts withImage={true} />
        </div>
    );
};

export default Menu;
