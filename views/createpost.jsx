import React from "react";
import Nav from "./components/Nav";

const createPost = () => (
    <main>
        <div className="text-stone-800">
            <Nav/>
            <section className="col-6 mt-5">
                <div className="flex flex-col items-center justify-content-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-light tracking-tight text-gray-900 md;text-2x1">
                                Create a post
                                </h1> 
                                <form
                                action="/post/createPost"
                                enctype="multipart/formdata"
                                method="POST"
                                >
                                    <div className="mb-3">
                                        <label
                                        for="title"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                             Title
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 b    lock w-full p-2.5"
                                            id="title"
                                            name="title"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label 
                                            for="caption"
                                            className=" block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Caption
                                        </label>
                                        <textarea
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 b    lock w-full p-2.5"
                                            id="caption"
                                            name="caption"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="mb-3">
                                            <label
                                            for="caption"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Condition
                                            </label>
                                            <input
                                            list="condituion"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 b    lock w-full p-2.5" 
                                            />
                                            <datalist className="" id="condition" name="condition">
                                                <option value="New" />
                                                  <option value="Used (Like New)"/>
                                                  <option value="Used (Great)"/>
                                                  <option value="Used (Good)"/>
                                                  <option value="Used (Fair)"/>
                                            </datalist>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
);

export default createPost;