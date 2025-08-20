"use client"
import React from "react";

import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export function Vote() {
    return(
        <>
          <div className="votes w-full flex items-center justify-center gap-1 p-[2px] rounded-sm border-[1px] border-chrome">
                <button className="flex w-6 items-center justify-center border border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-lime_green">
                    <ThumbUpIcon className="text-chrome !text-[14px] group-hover:text-lime_green transition-all duration-300" />
                </button>
                <span className="text-white text-sm">54</span>
                <button className="flex w-6 items-center justify-center border border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-candy">
                    <ThumbDownIcon className="text-chrome !text-[14px] group-hover:text-candy transition-all duration-300" />
                </button>
            </div>
        </>
    )
}

export function Comment(){
    return(
        <>
        <div className="votes w-full flex items-center justify-center gap-1 p-[2px] rounded-sm border-[1px] border-chrome">
            <button className="flex w-6 items-center justify-center border border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-electric">
                <ModeCommentIcon className="text-chrome !text-[14px] group-hover:text-electric transition-all duration-300" />
            </button>
            <span className="text-white text-sm">112</span>
        </div>
        </>
    )
}
export function Repost(){
    return(
        <>
        <div className="reposts w-full flex items-center justify-center gap-1 p-[2px] rounded-sm border-[1px] border-chrome">
            <button className="flex w-6 items-center justify-center border border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-electric">
                <RepeatOnIcon className="text-chrome !text-[14px] group-hover:text-electric transition-all duration-300" />
            </button>
            <span className="text-white text-sm">25</span>
        </div>
        </>
    )
}

export function Bookmark() {
    return(
        <>
            <div className="reposts w-full flex items-center justify-center gap-1 p-[2px] rounded-sm">
                <button className="flex w-6 items-center justify-center border-[2px] border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-sapphire">
                    <BookmarkIcon className="text-chrome !text-[20px] group-hover:text-sapphire transition-all duration-300" />
                </button>
            </div>
        </>
    )
}