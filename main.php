
<HTML> 
	<HEAD><TITLE>홈페이지 이름 </TITLE>
	<meta charset="utf-8"> 
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		<style type="text/css">
			a {
				color: :black; 
			}
			a:hover { 
				color: black; 
				cursor: default;}
				.menu_folder {
					list-style: none;
				}
				.menu_folder li {
					font-size: 20px;
					height: 45px;	
					padding-top: 5px;
				}
				.menu_folder li:hover {
					font-weight: bold;
					cursor: default;

				}
				.menu_folder li:before{		
					float: left;
					content:  url('folder.png');
					transform: scale(.2);
					width: 1px;
					height: 1px;
					margin-right: 30px;
					margin-bottom: 20px;
				}
				.folderAddBtn { 
					font-size: 20px;

				}
				.folderAddbtn:hover {
					cursor: default;
					font-weight: bold;
				}
				.folderAddbtn:before{
					float: left;
					content: url('add.png');
					transform:scale(.008);
					margin-left: 30px;
					margin-right: 30px;
					margin-top: 3px;
					width: 1px;
					height: 1px;
				}
				.papers p{
					padding: 20px;
					padding-top: 10px;
					margin:25px;
					margin-right: 0px;
					background-image: url('notepaper2.jpg');
					background-repeat: no-repeat;
					width: 230px;
					height: 230px;
					background-size: contain;
					float: left;
					color: black;
				}
				.papers p:hover { 
					font-size: 17px;
					color: black;
				} 
				.memoMenu { 
					
				 }
				.papers button {
					float : top; 
					width: 100px;
					height: 50px;
					margin-top: 50px;
					
				}		

				.newMemo {
					font-size: 20px;
				}
				.newMemo:hover {
					cursor: default;
					font-weight: bold;
					text-decoration: none;
					text-decoration-style: none;
				}
				.newMemo:before { 
					float: left;
					content: url('add.png');
					transform:scale(.008);
					margin-left: 30px;
					margin-right: 30px;
					margin-top: 3px;
					width: 1px;
					height: 1px;
				}
				.profile {
					float: left;
					font-size: 20px;
					width: 200px;
					height: 45px;
					margin-left: 1%;
					padding-top: 20px;


				}
				.profile:before {
					float: left;
					content: url('profile.png');
					transform:scale(.1);
					margin-bottom: 15px;
					margin-left: 30px;
					padding-left: 50px;
					padding-right: 15px;
					width: 1px;
					height: 0px;

				}
				.profile:hover { 
					cursor: default; }
					.headLine { 
						background-color:#ffffff; height: 70px; margin-bottom: 15px;
					}
					.topbar {

					}
					.topbar img {
						width:40px;
						height:40px ;
						margin-left: 10%; 
						margin-top: 20px; 
						float: left;
					}
					.topbar h1 {
						margin-bottom:0;  
						float: left; 
						margin-left: 10px;
					}
					.searchInput { 
						text-align: center; 
						float: left;
						margin-left:35px;
						margin-top: 27px; 
						width: 300px;
						font-size: 15px;

					}
				</style>
			</HEAD> 
			<body>

				<div id="container" style="width:100%; height:500px;">
					<div class="headLine">


						<div class="profileDiv">

							<h5 class="profile">정위대님</h5>

						</div>

						<div class="topbar" >
							<img src="./icon.png" >
							<h1>Wi-Note : Jot down your thought!</h1>
							<input class="searchInput" type="text" name="hint" placeholder="당신의 생각을 검색하세요">
						</div>


					</div>



					<div id="menu" style="background-color:#FFFFFF;height:1000px;width:20%;float:left; padding-top: 30px;
					border:1px solid #949494;
					">
					<p class="newMemo"><a href="write.html"> 새 메모 쓰기</a></p>
					<ul class="menu_folder">
						<li><a href="main.html">전체 메모</a></li>
						<li>중요 메모</li>
						<li>공유 메모</li>
					</ul>
					<p class="folderAddBtn"  >메모 폴더 추가</p>
				</div>
				<div id="content" style="background-color:#FFFFFF;height:1000px;width:80%;float:left; border:1px solid #949494;
				border-left: 0px;
				">

<?
for($i = 0 ; $i  < 10; $i++){


	?>

				<div class="papers">					
					<div class="paper1">
						<p style="float: left;"><a href="write.html"> “저는 메갈리아 사이트를 들어가보지 않았지만 혐오감정이 이렇게 좋지 않은건데 거울이론이라고 그걸 본떠서 하는 방식이 얼마나 도움이 되는지는 의문이 들어요.</a></p>
						<div class="memoMenu">
							
						<button class="starBtn">즐겨찾기</button>			
						<button class="delBtn">삭제</button>			
						
						</div>
					</div>

					
				</div>
			

<?
}
?>

				
			</div>


		</div>



	</div>




	<div id="footer" style="background-color:#FFFEF1;clear:both; height: 500px;">
		@IT Centre
	</div>
</div>
</body>
</html> 