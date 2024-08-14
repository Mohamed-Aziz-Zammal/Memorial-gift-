// EmailJS initialization
    var x = prompt("id");
    var y = prompt("service");
    var z = prompt("template");
(function(){
    emailjs.init(x); // ضع هنا معرف مستخدم EmailJS الخاص بك
})();

function showMessage() {
    var message = document.getElementById("message");
    message.classList.toggle("hidden");

    var question = document.getElementById("question");
    if (!message.classList.contains("hidden")) {
        setTimeout(function() {
            question.classList.remove("hidden");
        }, 1000);
    } else {
        question.classList.add("hidden");
    }
}

function showDateTimePicker() {
    var dateTimePicker = document.getElementById("dateTimePicker");
    dateTimePicker.classList.remove("hidden");
}

document.getElementById("noButton").addEventListener("mouseover", function() {
    var button = this;
    var container = button.parentElement;

    var x = Math.random() * (container.clientWidth - button.clientWidth);
    var y = Math.random() * (container.clientHeight - button.clientHeight);

    button.style.left = x + "px";
    button.style.top = y + "px";
});

function sendEmail() {
    var dateTime = document.getElementById("dateTime").value;
    
    
    if (dateTime) {
        var templateParams = {
            date_time: dateTime,
            to_email: 'medecinpfe1@gmail.com'  // ضع هنا البريد الإلكتروني الذي تريد استلام الرسالة عليه
        };
        
        

        emailjs.send(y, z, templateParams)
            .then(function(response) {
                alert('تم إرسال التفاصيل بنجاح!');
            }, function(error) {
                console.error('حدث خطأ أثناء الإرسال:', error);
                alert('حدث خطأ أثناء الإرسال: ' + JSON.stringify(error));
            });
    } else {
        alert('الرجاء اختيار موعد ووقت.');
    }
}
