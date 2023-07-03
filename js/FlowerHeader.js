window.onload = function () {
    // 检查元素是否存在
    if ($('.FlowerHeader').length === 0) {
        // 创建 FlowerHeader 元素
        flowerHeader = $('<div>', { class: 'FlowerHeader' });
        // 将 FlowerHeader 元素添加到文档中
        $('.hero').prepend(flowerHeader);
    }

    // 判定是否移动端
    const isMobile = /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    if (isMobile) {
        $(document).on('touchmove', function () {
            // 获取页面滚动的距离
            var scrollDistance = $(this).scrollTop();
            console.log(scrollDistance);
            if (scrollDistance > 200) {
                flowerHeader.addClass('out');
            } else {
                flowerHeader.removeClass('out');
            }
        });
    } else {
        $(document).scroll(function() {
            // 获取页面滚动的距离
            var scrollDistance = $(this).scrollTop();

            if (scrollDistance > 480) {
                flowerHeader.addClass('out');
            } else {
                flowerHeader.removeClass('out');
            }
        });
    }
}