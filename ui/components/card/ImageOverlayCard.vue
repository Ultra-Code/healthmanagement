<template>
    <!-- component -->
<div class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4">
    <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
        <a class="" href="#" title="Image Link">
            <picture class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg" style="padding-top: 75%;">
                <img class="absolute inset-0 w-full h-full object-cover" src="https://picsum.photos/800/600" alt="A random image from Unsplash">
            </picture>
        </a>
    </div>
    <div class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
        <div class="p-4 md:p-8 bg-white shadow-lg">
            <p class="mb-2 text-lg leading-none font-medium">
                <a class="" href="#" title="Heading Link">
                    Card Title
                </a>
            </p>
            <p class="mb-2 text-sm text-gray-700">
                Lorem ipsum dolar sit amet
            </p>
            <p class="text-xs text-gray-500">
                Published @
                <time datetime="">
                    01/01/2021
                </time>
            </p>
        </div>
    </div>
</div>
</template>
