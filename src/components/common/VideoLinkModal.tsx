"use client";

import { Button, Description, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

interface IVideoLinkModalProps {
  showVideoLinkModal: boolean;
  setShowVideoLinkModal: (showVideoLinkModal: boolean) => void;
  onClickOk: (embedVideoHTML: string) => void;
}

export default function VideoLinkModal(props: IVideoLinkModalProps) {
  const { showVideoLinkModal, setShowVideoLinkModal, onClickOk } = props;
  const [videoLink, setVideoLink] = useState<string>("");

  return (
    <>
      <Dialog
        open={showVideoLinkModal}
        onClose={() => setShowVideoLinkModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center py-4 bg-black bg-opacity-50 ">
          <DialogPanel className="max-w-lg rounded space-y-4 border bg-white py-6 px-14">
            <Description className="flex justify-center pb-2">
              업로드할 비디오 Embed 링크를 삽입해주세요.
            </Description>
            <input
              type="text"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="w-full px-2 py-1 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2 justify-center">
              <Button
                className="btn-dark-blue py-2 px-6"
                onClick={() => {
                  onClickOk(videoLink);
                  setShowVideoLinkModal(false);
                }}
              >
                확인
              </Button>

              <Button
                className="btn-white py-2 px-6 "
                onClick={() => setShowVideoLinkModal(false)}
              >
                취소
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
