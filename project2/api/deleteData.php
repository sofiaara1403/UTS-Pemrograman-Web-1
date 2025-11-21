<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("dummy.json"), true);
$input = json_decode(file_get_contents("php://input"), true);
$id = $input['id'];

$data = array_filter($data, function ($item) use ($id) {
    return $item['id'] != $id;
});

file_put_contents("dummy.json", json_encode($data, JSON_PRETTY_PRINT));

echo json_encode(["message" => "Data deleted successfully"]);
?>
