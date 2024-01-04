<?php
function getMsgs() {
  $lines = file("messages.json");
  $strline = "";
  foreach($lines as $line) {
    $strline = $strline.$line;
  }
  return json_decode($strline);
}
function sendMsgs($ws) {
  $arr = getMsgs();
  // call push method of $ws with the length of $arr as a parameter
  $ws->push(json_encode(array(
    "channel" => "message count",
    "data" => count($arr)
  )));
  foreach($arr as $message) {
    $ws->push(json_encode(array("channel"=>"message", "data"=>json_encode($message))));
  }
}
function storeMsg($data, $ws) {
  echo "called storeMsg\n";

  /*$objData = json_decode($data);
  $msg = $objData->time." ".$objData->name."：".$objData->msg;*/
  $objData = json_decode($data);
  $msg = $objData;
  if (strlen($objData->msg) > 400) {
    return;
  }

  ob_start();
  try {
    readfile("messages.json");
  } catch (Exception $e) {
    echo $e."\n";
    exit();
  }
  $fdata = ob_get_contents();
  ob_end_clean();

  $arr = json_decode($fdata);
  if (count($arr) >= 400) {
    array_shift($arr);
  }
  array_push($arr, $msg);

  $sample2 = fopen("messages.json", "w");
  fwrite($sample2, json_encode($arr));
  fclose($sample2);

  return json_encode(array("channel"=>"message", "data"=>$data));
}