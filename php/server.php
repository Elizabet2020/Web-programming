<?php
session_start();
$start = microtime(true);
if (isset($_GET["x"])) $x = $_GET["x"];
if (isset($_GET["y"])) $y = $_GET["y"];
if (isset($_GET["r"])) $r = $_GET["r"];


$check = "miss";
$fail = "";

$y = preg_replace("/,/", ".", $y);
$r = preg_replace("/,/", ".", $r);

if (!(is_numeric($x))){
    $fail .= "Некорректное значение X\n";
}
elseif(!is_numeric($y) || $y<=-5 || $y>=5){
    $fail .= "Некорректное значение Y\n";
}
elseif(!is_numeric($r) || $r<1 || $r>4){
    $fail .= "Некорректное значение R\n";
}
if ($fail != "") {
    die($fail);
}
if ($x>=0 && $y>=0 && $x<=$r && $y<=$r && $y<=($r-$x)) {
    $check = "hit";
}
elseif ($x<=0 && $y<=0 && $x>=-$r/2 && $y>=-$r){
    $check = "hit";
}
elseif ($x<=0 && $y>=0 && $y<=sqrt($r*$r/4 - $x*$x)) {
    $check = "hit";
}
$time = number_format(microtime(true) - $start, 6);
$dt = (new DateTime("now", new DateTimeZone('Europe/Moscow')))->format('H:i:s');

$result = array($x, $y, $r, $check, $dt, $time);
if (!isset($_SESSION['results'])){
    $_SESSION['results'] = array();
}
array_push($_SESSION['results'], $result);

$response = "";
if (isset($_SESSION['results'])){
    //foreach ($_SESSION['results'] as $result){
        $response .= "<tr>
                    <th>$result[0]</th>
                    <th>$result[1]</th>
                    <th>$result[2]</th>
                    <th>$result[3]</th>
                    <th>$result[4]</th>
                    <th>$result[5]</th>
             </tr>";
    //}
}
echo $response;
