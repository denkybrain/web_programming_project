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
			CKEDITOR.config.width = 500; // ���� 
			CKEDITOR.config.height = 500; // ���� // �ۼ�Ʈ�� �����մϴ�.
			
			//CKEDITOR.config.language = 'ja';
			CKEDITOR.replace( 'editor1',{
				filebrowserImageUploadUrl: "ckeditor/plugins/imgupload.php"
			});
			
			CKEDITOR.on('dialogDefinition', function( ev ){
            var dialogName = ev.data.name;
            var dialogDefinition = ev.data.definition;
          
            switch (dialogName) {
                case 'image':
                    dialogDefinition.removeContents('Link'); // Link �� ����
                    break;
            }
			
			var uploadTab = dialogDefinition.getContents( 'Upload' );
			var uploadButton = uploadTab.get('uploadButton');
			uploadButton['filebrowser']['onSelect'] = function( fileUrl, errorMessage ) {
				console.log(fileUrl); // ���ε�� ���� url �Դϴ�. 
			}
				  
        });
			
		</script>
	</form>
	
	
</body>
</html>