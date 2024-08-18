import Modal from "@/components/common/Modal";

export function openModal(open: boolean, title: string) {
  console.log("클릭zzzzzzzzzzzzz", open, title);

  return <Modal open={open} title={title} />;
}
