import Head from "next/head";
import { ArrowRightIcon, DotsHorizontalIcon, ExclamationIcon, InformationCircleIcon, XIcon } from "hero/outline";

export default function Index() {
    return (
        <div className="bg-gray-50 absolute w-screen h-screen">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,500;0,800;1,500;1,800&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="bg-blue-500 pb-4">
                <div className="flex items-center justify-between p-4">
                    <XIcon className="w-3 h-3 text-white" />
                    <h1 className="font-extrabold text-white">Patient</h1>
                    <DotsHorizontalIcon className="w-3 h-3 text-white" />
                </div>
            </div>

            <div className="mx-2">
                <div className="border-gray-400 shadow-lg -mt-4 p-2 bg-white border space-y-2">
                    <h2 className="font-extrabold text-xl leading-tight">Westmead Post-Traumatic Amnesia Scale</h2>
                    <div className="flex">
                        <div className="flex-1">
                            <p className="font-medium text-xs opacity-50">Patient</p>
                            <p classname="font-extrabold text-sm">B7A42M5Z</p>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-xs opacity-50">Question</p>
                            <p classname="font-extrabold text-sm">1 of 7</p>
                        </div>
                    </div>
                </div>

                <div className="border-gray-400 divide-gray-400 shadow-lg mt-4 bg-white border divide-y">
                    <div className="bg-purple-100 flex items-center p-2">
                        <InformationCircleIcon className="flex-none mr-2 w-2 h-2 opacity-50" />
                        <p className="font-medium text-xs opacity-50">
                            When the patient struggles to form an answer, you may prompt them with three choices
                            selected at random sorted in consecutive order.
                        </p>
                    </div>
                    <div className="p-2">
                        <p className="font-medium text-xs opacity-50">Observe the patient on their</p>
                        <h3 className="font-extrabold text-lg leading-tight">
                            Short attention span, easy distractibility, inability to concentrate.
                        </h3>
                    </div>
                    <div className="bg-yellow-100 flex items-center p-2">
                        <ExclamationIcon className="flex-none mr-2 w-2 h-2 opacity-50" />
                        <p className="font-medium text-xs opacity-50">You must select a response to the question.</p>
                    </div>
                </div>

                <button className="bg-blue-500 font-extrabold text-sm py-1.5 shadow-lg flex items-center justify-between mt-4 px-2 w-full text-white">
                    Next question <ArrowRightIcon className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
}
