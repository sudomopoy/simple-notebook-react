import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Input from '../common/Input';
import ReachText from '../common/ReachText';
import { addNote, deleteNote, updateNote } from './../actions/actions';
import { useNavigate } from 'react-router-dom';
import selectNoteAction from '../actions/note/selectNoteAction';
function SingleNote(props) {
    const { addNote, updateNote, deleteNote, selectedNote, selectNote } = props;
    const [title, setTitle] = useState(selectedNote ? selectedNote?.title : "");
    const [description, setDescription] = useState(selectedNote ? selectedNote?.description : "");
    let navigate = useNavigate();
    const saveNoteHandler = async () => {
        try {
            if (selectedNote) {
                await updateNote({
                    _id: selectedNote._id,
                    title: title,
                    description: description
                });
            } else {
                await addNote({
                    title: title,
                    description: description
                });
            }
        } catch (err) {
            console.log(err);
        }
        navigate("/");
    }
    const deleteNoteHandler = async () => {
        try {
            await deleteNote({
                _id: selectedNote._id,
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        return () => {
            selectNote(undefined);
        };
    }, []);
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-md w-full space-y-8 z-10">

                <div className="flex flex-row justify-center">
                    {selectedNote && <button
                        onClick={deleteNoteHandler}
                        type="button"
                        className={`group relative flex 
                                                justify-center py-4 px-4 text-xl border border-transparent
                                                font-medium rounded-md text-white bg-danger  
                                                hover:bg-danger-hover focus:outline-none focus:ring-2
                                                focus:ring-offset-2 focus:ring-danger transition-all mx-1`}

                    >
                        <i class="fa fa-trash-o"></i>
                    </button>}
                    <button
                        onClick={saveNoteHandler}
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
                                onChange={setTitle}
                                initValue={selectedNote ? selectedNote?.title : ""}
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
                                onChange={setDescription}
                                initValue={selectedNote ? selectedNote?.description : ""}
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectNote: (note) => dispatch(selectNoteAction(note)),
        addNote: (noteDetails) => dispatch(addNote(noteDetails)),
        updateNote: (noteDetails) => dispatch(updateNote(noteDetails)),
        deleteNote: (noteDetails) => dispatch(deleteNote(noteDetails)),
    }
}
function mapStateToProps(state) {
    const { note } = state;
    return { selectedNote: note?.selectedNote }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleNote)
