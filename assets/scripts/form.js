function showHide(element_id) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_id)) { 
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(element_id); 
        //Если css-свойство display не block, то: 
        if (obj.style.display != "flex") { 
            obj.style.display = "flex"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!"); 
}   
