<?php
header("Content-Type: application/json");

$data = file_get_contents("dummy.json");
echo $data;
?>
