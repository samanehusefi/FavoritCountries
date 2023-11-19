<template>
    <div role="status" class="w-full flex flex-wrap animate-pulse">
        <div class="w-full p-2">
            <div class="bg-white shadow-lg hover:shadow-xl rounded-lg ">
                <div class="h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover">
                    <div class=" h-[200px] flex items-center justify-center w-full  bg-gray-300 rounded  dark:bg-gray-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>

                    <div class="text-left justify-end flex">
                        <div class="w-[40px]  bg-gray-200 justify-end p-2 rounded-full my-1 mx-5">
                            <div class="w-6 h-6" viewBox="0 0 24 24"></div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-start px-2 pt-2">
                    <div class="p-2 flex-grow">
                        <div class="font-medium text-xl font-poppins">
                            <div class="mt-5 space-y-3">
                                <div class="w-1/2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>
                        <div class="text-gray-500 font-nunito">
                            <div class="mt-5 space-y-3">
                                <div class="w-1/2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

