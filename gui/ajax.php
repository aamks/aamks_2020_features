<?php
session_name('aamks');
session_start();

function ajaxPdf2svg() { /*{{{*/
	$src=$_FILES['file']['tmp_name'];
	$dest=$_SESSION['main']['working_home']."/out.svg";
	$z=shell_exec("pdf2svg $src $dest 2>&1");
	$svg='';
	if(empty($z)) { 
		$svg=shell_exec("cat $dest"); 
		$svg=preg_replace("/#/", "%23", $svg);
		echo json_encode(array("msg"=>"ajaxPdf2svg(): OK", "err"=>0,  "data"=>$svg));
	} else {
		echo json_encode(array("msg"=>"ajaxPdf2svg(): $z", "err"=>1, "data"=>0));
	}
}
/*}}}*/
function ajaxAnimsList() { /*{{{*/
	$f=$_SESSION['main']['working_home']."/workers/anims.json";
	if(is_file($f)) { 
		$data=json_decode(file_get_contents($f));
		echo json_encode(array("msg"=>"ajaxAnimsList(): OK", "err"=>0,  "data"=> $data));
	} else {
		echo json_encode(array("msg"=>"ajaxAnimsList(): $z", "err"=>1, "data"=>0));
	}
}
/*}}}*/
function ajaxAnimsStatic() { /*{{{*/
	$f=$_SESSION['main']['working_home']."/workers/static.json";
	if(is_file($f)) { 
		$data=json_decode(file_get_contents($f));
		echo json_encode(array("msg"=>"ajaxAnimsStatic(): OK", "err"=>0,  "data"=> $data));
	} else {
		echo json_encode(array("msg"=>"ajaxAnimsStatic(): $z", "err"=>1, "data"=>0));
	}
}
/*}}}*/
function ajaxSingleAnim() { /*{{{*/
	$q=$_POST['q'];
	echo json_encode(array("msg"=>"ajaxSingleAnim(): OK", "err"=>0,  "data"=>"q: $q"));
}
/*}}}*/
function ajaxApainter() { /*{{{*/
	$src=$_POST['cadfile'];
	$dest=$_SESSION['main']['working_home']."/cad.json";
	$z=file_put_contents($dest, $src);
	if($z>0) { 
		echo json_encode(array("msg"=>"ajaxApainter(): OK", "err"=>0, "data"=>""));
	} else { 
		echo json_encode(array("msg"=>"ajaxApainter(): Cannot write $dest", "err"=>1, "data"=>""));
	}
}
/*}}}*/
function main() { /*{{{*/
	if(!empty($_SESSION['main']['user_id'])) { 
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: *');
		header('Content-type: application/json');
		if(!is_writable($_SESSION['main']['working_home'])) { 
			echo json_encode(array("msg"=>"ajaxMain(): Cannot write ".$_SESSION['main']['working_home'], "err"=>1, "data"=>0));
			exit();
		}
		if(isset($_GET['pdf2svg']))        { ajaxPdf2svg(); }
		if(isset($_GET['apainter']))       { ajaxApainter(); }
		if(isset($_GET['getAnimsList']))   { ajaxAnimsList(); }
		if(isset($_GET['getAnimsStatic'])) { ajaxAnimsStatic(); }
		if(isset($_GET['getSingleAnim']))  { ajaxSingleAnim(); }
	}
}
/*}}}*/

main();
?>