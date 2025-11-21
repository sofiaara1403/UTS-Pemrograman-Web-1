<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("dummy.json"), true);
$input = json_decode(file_get_contents("php://input"), true);

$input['id'] = count($data) + 1;

$newData = [
    "id" => $input['id'],
    "nama" => $input['nama'],
    "deskripsi" => $input['deskripsi']
];

$data[] = $newData;

file_put_contents("dummy.json", json_encode($data, JSON_PRETTY_PRINT));

echo json_encode(["message" => "Data created successfully"]);
?>
