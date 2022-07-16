<?php
    $to = 'plahotin_s@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    // $userEmail = $_POST['email'];
    $subject = $_POST['subject'];
    $notspam = $_POST['notspam'];


    $userSelectService = $_POST['selectService'];
    $userSelectPrice = $_POST['selectPrice'];
    $userTel = $_POST['tel'];

    if ($notspam == 'Not spam') {
        // $notspam = 'Не бот';
    } else {
        // $notspam = 'Бот';
        exit('Exit');
    };

    $message = '
    <html>
        <head>
            <title>' . $subject . '</title>
        </head>
        <body>
            <h2 style="">Заявка с формы: ' . $subject . '</h2>
            <p>Контактный телефон клиента: ' . $userTel . '</p>
            <p>Услуга: ' . $userSelectService . '</p>
            <p>Меседжер для отправки прайса: ' . $userSelectPrice . '</p>
        </body>
    </html>';
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Заявка с сайта  АРТАДИТАКС <info@siteytyr.ru>\r\n"; //Наименование и почта отправителя

    // mail($to, $subject, $message, $headers);

    if (mail($to, $subject, $message, $headers)) {
        // mail($userEmail, $subject, $message_2, $headers);
        // echo $notspam;
    } else {
        // echo 'error';
    }

?>
