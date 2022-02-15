import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllNotes } from '../actions/actions';
import selectNoteAction from '../actions/note/selectNoteAction';
import { useNavigate } from 'react-router-dom';

var indexIsEven = (val, idx) => idx % 2 === 0;

function Notes(props) {
    const {
        notes: noteRawList,
        getAllNotes,
        selectNote
    } = props;
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [filteredNotes, setFilteredNotes] = useState({
        right: [],
        left: [],
    });
    const setAllNotes = () => {
        const notes = noteRawList.reverse();
        setFilteredNotes({
            right: R.addIndex(R.filter)(indexIsEven, notes),
            left: R.addIndex(R.reject)(indexIsEven, notes),
        });
    }
    const handelSingleNoteClick = async (note) => {
        console.log(note, "notenotenote");
        await selectNote(note);
        navigate(`/note/${note?._id}`);
    }
    useEffect(() => {
        getAllNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        setAllNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [noteRawList]);
    const filterNotes = (tx) => {
        let result = [];
        const notes = noteRawList.reverse();
        notes.forEach((item) => {
            if (item?.title.indexOf(tx) > -1) {
                result.push(item)
            }
        });
        return result;
    }
    useEffect(() => {
        if (searchText !== "") {
            const filteredNotes = filterNotes(searchText);
            setFilteredNotes({
                right: R.addIndex(R.filter)(indexIsEven, filteredNotes),
                left: R.addIndex(R.reject)(indexIsEven, filteredNotes),
            });
        } else {
            setAllNotes();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText]);
    const renderSingleNote = (note) => {
        return <div
            onClick={() => { handelSingleNoteClick(note) }}
            className="bg-white rounded-md p-8  mt-1 border border-secondary min-w-full cursor-pointer">
            <h1 className="text-xl font-medium  text-gray-700 mb-4">
                {note?.title}
            </h1>
            <p className="break-all">
                {note?.description}
            </p>
        </div>
    }
    const SearchInput = () => {
        return <div class="w-80 mt-5 flex border border-gray-300 rounded-circ bg-white">
            <button class="flex items-center justify-center px-4">
                <i class="fa fa-search"></i>
            </button>
            <input
                value={searchText}
                onChangeCapture={(v) => { setSearchText(v.target.value) }}
                autoFocus={true}
                type="text"
                class="px-4 py-2 w-full rounded-circ"
                placeholder="Search..." />

        </div>
    }

    return (
        <div>
            <span style={{ display: "none" }}>notes-list-test</span>
            <Link
                to="/note"
                className="bg-secondary w-full px-5 py-4 w-min fixed right-3 bottom-3 rounded-circ z-20 hover:outline-none hover:ring-2
                                    hover:ring-offset-2 hover:ring-secondary transition-all">
                <i class="fa fa-plus"></i>
            </Link>
            <div className="flex flex-col justify-center items-center relative">
                <SearchInput />

                {filteredNotes["left"]?.length === 0 &&
                    filteredNotes["right"]?.length === 0 && <div className='mt-5'>
                        <i class="fa fa-eye mr-2"></i>
                        Nothing!
                        <i class="fa fa-eye ml-2"></i>
                    </div>}
                <div className="max-h-full min-w-full w-screen grid grid-cols-2 gap-1 py-12 px-4 sm:px-6 lg:px-8 relative ">
                    <div>
                        {filteredNotes["left"].map((note) => {
                            return renderSingleNote(note);
                        })}
                    </div>
                    <div>
                        {filteredNotes["right"].map((note) => {
                            return renderSingleNote(note);
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        getAllNotes: () => dispatch(getAllNotes()),
        selectNote: (note) => dispatch(selectNoteAction(note)),
    }
}
function mapStateToProps(state) {
    const { note } = state
    return {
        notes: note.notes
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes)