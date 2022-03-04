<?php
	if($_POST){
		$fullname = $_POST['fullname'];
		$birth = $_POST['birth'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];

		$result = array(
			'msg' => '<p>Thanks <b>'.$fullname.'</b> for registering! Soon we will contact you by <b>'.$email.'</b> with more information.</p>'
		);
	}

	echo json_encode($result);

	//teste
?>