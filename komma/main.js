function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block"; // 모달 표시
    modalImg.src = img.src; // 클릭한 이미지의 src를 모달 이미지에 설정
    captionText.innerHTML = img.alt; // 이미지의 alt 텍스트를 캡션으로 설정
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // 모달 숨김
} 