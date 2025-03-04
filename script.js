function showSection(sectionId) {
    console.log("切换到：" + sectionId); // 调试用

    // 获取所有 <section> 并隐藏
    var sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 显示选中的部分
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        console.log("成功切换到：" + sectionId);
    } else {
        console.error("错误：未找到 " + sectionId);
    }
}
