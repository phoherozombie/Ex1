function getQueryParam(param){
    const urlParams = new URLSearchParams(widow.location.search);
    return urlParams.get(param);
}
//Hàm hiển thị chi tiết sản phẩm 
function displayRoomDetail(){
    const code=getQueryParam('code');
    const rooms=getRoomsFromLocalStorage();
    const room=rooms.find(p => p.code === code);

    if (room){
        const roomDetail=document.getElementById('roomDetail');
        roomDetail.innerHTML= `
        <div class="card-body">
            <img src="${room.image}" class="card-img-top" alt="${room.name}" style="height: 200px; object-fit: over;">
            <div class = "card-body"> 
                <h5 class ="card-title">${room.name}</h5>
                <p class="card-text"> Mã Phòng: ${room.code}</p>
                <p class="card-text"> Giá: ${room.price} VND</p>
            </div> 
        </div>

        `;

    } else{
        console.error('Sản phẩm không tồn tại')
    }
}
//Hàm lấy phòng từ Local Storage
function getRoomsFromLocalStorage(){
    const rooms =JSON.parse(localStorage.getItem('rooms'));
    return rooms ? rooms : [];

}
// Hiển thị chi tiết phòng khi trang không được tải
document.addEventListener('DOMContentLoaded',displayRoomDetail);
