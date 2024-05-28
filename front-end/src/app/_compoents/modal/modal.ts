import swal from "sweetalert";

export const copyToClipboard = async (text: string) => {
    const url = "http://localhost:3000/link";
    swal('클립보드 복사', '클립보드를 공유하세요!', 'success')
        .then(async () => {
            await navigator.clipboard.writeText(`${url}/${text}`);
        });
};
