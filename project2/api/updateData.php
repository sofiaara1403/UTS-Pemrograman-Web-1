<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("dummy.json"), true);
$input = json_decode(file_get_contents("php://input"), true);
$id = $input['id'];

foreach ($data as &$item) {
    if ($item['id'] == $id) {
        $item['nama'] = $input['nama'];
        $item['deskripsi'] = $input['deskripsi'];
    }
}

file_put_contents("dummy.json", json_encode($data, JSON_PRETTY_PRINT));

echo json_encode(["message" => "Data updated successfully"]);
?>
