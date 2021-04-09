import { useRouter } from "next/router";

import Shell from "app/components/shell";

import ArrowUpRight from "app/icons/arrow-up-right";
import Beaker from "app/icons/beaker";
import Clipboard from "app/icons/clippy";
import Share from "app/icons/share";
import Trash from "app/icons/trash";

export default function Patient() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Shell title="Patient">
            <div className="flex flex-col space-y-32">
                <div className="grid gap-y-16 grid-cols-2">
                    <div className="col-span-2 space-y-2">
                        <p className="text-purple-gray text-small">Identity</p>
                        <p className="text-medium font-bold">{id}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-purple-gray text-small">Created</p>
                        <p className="text-medium font-bold">11th December ‘20</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-purple-gray text-small">Last Viewed</p>
                        <p className="text-medium font-bold">5th Feburary ‘21</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-16">
                    <h1 className="text-large font-bold">Tests</h1>

                    <button className="space-y hover:shadow-glow p-16 text-left bg-white border border-purple-soft rounded focus:outline-none shadow space-y-16 transition-all focus:ring">
                        <div className="flex flex-row items-start justify-between">
                            <div className="p-8 text-white bg-purple-hard rounded">
                                <Clipboard height="16" />
                            </div>
                            <ArrowUpRight height="24" className="text-purple-gray" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-large font-bold">Agitated Behaviour Scale</h1>
                            <p className="text-purple-gray text-small">
                                The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during the
                                acute phase of recovery from acquired brain injury including aspects of aggression,
                                disinhibition, and lability.
                            </p>
                        </div>

                        <div className="-m-16 pt-16 px-16 text-purple-gray bg-purple-white border-t border-purple-soft">
                            <p className="text-small">Last Administered</p>
                            <p className="text-medium font-bold">11th December '20</p>
                        </div>
                    </button>

                    <button className="text-left bg-white border border-purple-soft rounded shadow space-y-16">
                        <div className="flex flex-row items-start justify-between m-16">
                            <div className="p-8 text-white bg-purple-hard rounded">
                                <Clipboard height="16" />
                            </div>
                            <ArrowUpRight height="24" className="text-purple-gray" />
                        </div>

                        <div className="m-16 space-y-2">
                            <h1 className="text-large font-bold">Westmead Post-Traumatic Amnesia Scale</h1>
                            <p className="text-purple-gray text-small">
                                The Westmead Post-traumatic Amnesia Scale (WPTAS) measures the duration and severity of
                                post-traumatic amnesia aquired from brain injury.
                            </p>
                        </div>

                        <div className="px-16 py-8 text-purple-gray bg-purple-white border-t border-purple-soft">
                            <p className="text-small">Last Administered</p>
                            <p className="text-medium font-bold">18th January '21</p>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col space-y-16">
                    <h1 className="text-large font-bold">Actions</h1>

                    <button className="p-16 text-left bg-white border border-purple-soft rounded shadow space-y-16">
                        <div className="flex flex-row items-start justify-between">
                            <div className="p-8 text-white bg-purple-hard rounded">
                                <Beaker height="16" />
                            </div>
                            <ArrowUpRight height="24" className="text-purple-gray" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-large font-bold">Analysis</h1>
                            <p className="text-purple-gray text-small">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque orci vitae ut urna,
                                volutpat.
                            </p>
                        </div>
                    </button>

                    <div className="flex flex-row space-x-16">
                        <button className="flex flex-row px-16 py-12 text-purple-gray text-medium bg-white border border-purple-soft rounded shadow space-x-16">
                            <Share height="16" />
                            <p>Export</p>
                        </button>

                        <button className="text-red-hard border-red-hard flex flex-row px-16 py-12 text-medium bg-white border rounded shadow space-x-16">
                            <Trash height="16" />
                            <p>Delete</p>
                        </button>
                    </div>
                </div>
            </div>
        </Shell>
    );
}
