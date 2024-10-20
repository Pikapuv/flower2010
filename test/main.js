onload = () =>{
        document.body.classList.remove("container");
};
const message = "Chúc Hồng luôn xinh đẹp, tài năng và gặt hái được nhiều thành công trong công việc!!";
const typewriterElement = document.getElementById('typewriter');

let index = 0;

function type() {
    if (index < message.length) {
        typewriterElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(type, 100); // Thời gian giữa mỗi ký tự
    } else {
        // Bỏ qua đường gạch khi hoàn thành
        typewriterElement.style.borderRight = 'none';
    }
}

type(); // Bắt đầu hiệu ứng gõ chữ