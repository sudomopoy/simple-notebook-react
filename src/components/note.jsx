import React from 'react'
import Input from '../common/Input';
import ReachText from '../common/ReachText';
function AddNote() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-md w-full space-y-8 z-10">

                <div className="flex flex-row justify-center">
                    <button
                        // onClick={onClick}
                        type="button"
                        className={`group relative flex 
                                                justify-center py-4 px-4 text-xl border border-transparent
                                                font-medium rounded-md text-white bg-danger  
                                                hover:bg-danger-hover focus:outline-none focus:ring-2
                                                focus:ring-offset-2 focus:ring-danger transition-all mx-1`}

                    >
                        <i class="fa fa-trash-o"></i>
                    </button>
                    <button
                        // onClick={onClick}
                        type="button"
                        className={`group relative flex 
                                                justify-center py-4 px-4 text-xl border border-transparent
                                                font-medium rounded-md text-white bg-primary  
                                                hover:bg-primary-hover focus:outline-none focus:ring-2
                                                focus:ring-offset-2 focus:ring-primary transition-all mx-1`}

                    >
                        <i class="fa fa-save"></i>
                    </button>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Email address
                            </label>
                            <Input
                                id="title"
                                name="title"
                                type="title"
                                autoComplete="off"
                                placeholder="Title"
                                topRounded={true}
                                autoFocus={true}
                            />
                        </div>
                        <div>
                            <ReachText
                                id="description"
                                name="description"
                                autoComplete="off"
                                required
                                placeholder="Description"
                                buttonRounded={true}
                                rows={15}
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddNote;