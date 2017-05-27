<!DOCTYPE HTML>
<html>
<head>
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="ckeditor/ckeditor.js"></script>
<script src="ckeditor/adapters/jquery.js"></script>

</head>
<body>
	<form style="height:500px;">
		<textarea name="editor1" id="editor1" rows="15" cols="80" style="height:100%;">
		</textarea>
		<script>
			// Replace the <textarea id="editor1"> with a CKEditor
			// instance, using default configuration.
			CKEDITOR.config.width = 500; // 넓이 
			CKEDITOR.config.height = 500; // 높이 // 퍼센트로 가능합니다.
			
			//CKEDITOR.config.language = 'ja';
			CKEDITOR.replace( 'editor1',{
				filebrowserImageUploadUrl: "ckeditor/plugins/imgupload.php"
			});
			
			CKEDITOR.on('dialogDefinition', function( ev ){
            var dialogName = ev.data.name;
            var dialogDefinition = ev.data.definition;
          
            switch (dialogName) {
                case 'image':
                    dialogDefinition.removeContents('Link'); // Link 탭 제거
                    break;
            }
			
			var uploadTab = dialogDefinition.getContents( 'Upload' );
			var uploadButton = uploadTab.get('uploadButton');
			uploadButton['filebrowser']['onSelect'] = function( fileUrl, errorMessage ) {
				console.log(fileUrl); // 업로드된 파일 url 입니다. 
			}
				  
        });
			
		</script>
	</form>
	
	
</body>
</html>