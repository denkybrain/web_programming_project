						var IndexURI = "https://myweb-554e3.firebaseio.com/memo/index.json";
						var memoURI = "https://myweb-554e3.firebaseio.com/memo.json";
						var baseURI = "https://myweb-554e3.firebaseio.com/";
						var memoAry = [];
						var EmptyAry = 0 ;
						function memoAryFlush(numb){
							memoAry = [];
							memoAry.length = numb;
						}
						function showDialog(dialog){
							document.getElementsByClassName('loadIndicator')[0].innerHTML = dialog;
						}
						function baseFlush(){
							document.getElementsByClassName('paperContainer')[0].innerHTML= "";
							document.getElementsByClassName('loadIndicator')[0].innerHTML= "";
						}
						function showloading(){
							baseFlush();
							var loader = "<br><br><CENTER>로딩중입니다.혹은 데이터베이스가 비어있습니다.</center>";
							showDialog(loader);
						}
						function showError(){
							baseFlush();
							var error = "<br><br><CENTER>해쉬태그로 검색해주세요!</center>";
							showDialog(error);
						}
						function flushHTML(){
							var contentHTML =
							document.getElementsByClassName('loadIndicator')[0].innerHTML;                              
							var someThinginContent = 
							contentHTML== "<br><br><center>로딩중입니다.혹은 데이터베이스가 비어있습니다.</center>";
								if(someThinginContent == 0)//로딩중이 아니라 다른 문구면
									someThinginContent = contentHTML == "<br><br><CENTER>해쉬태그로 검색해주세요!</center>";
								if(someThinginContent == true)
									baseFlush(); //비워버림
							}

							function searchByClick(id){
								document.getElementsByClassName('searchInput')[0].value = id;
								searchKey(id);  
							}
							function getMemoFromDBJquery(){
								$.ajax({
							url : IndexURI,
							method : "GET",
							success : function(data){ //인덱스 로드

								var IndexNumber = Number(data); 
								memoAryFlush(IndexNumber);
								//alert(IndexNumber+"개의 글이 있습니다. 불러오는 중입니다.");
								for(var z = IndexNumber; z > 0; z--){
									var loadUrl = baseURI+"memo/wrapper/memo"+(z-1)+"/content.json";                
									$.ajax({
										url : loadUrl,
										method : "GET",
										success : function(data){

											if(data =="none"){
												EmptyAry ++;
												showMemo();
												//log("Empty Array " +EmptyAry);
												return ; 
											//	log(data.substring(0, data.indexOf(":")));
												
											}
										//메모내용 로드 함수 호출된 순서에 상관없이
										//불러오는 대로 함수를 실행하는 구나(지멋대로란 뜻)
										if(memoIndicator < IndexNumber){
											if(data != null){       
												//flushHTML();    
											//alert(memoIndicator+1+"번째 데이터 : "+data);
											var splitedArray = data.split(' ');
											var linkedContent = '';
											for(var word in splitedArray){
												word = splitedArray[word];
												
												if(word.indexOf('#') >= 0){													
													if(word.indexOf('<font') > 0) {//존재하면, 즉 끝에 있으면
														//log("있음!");
														word = word.substring(0, word.indexOf('<font'));
													//log(word);
													}
													word = '<font style="color:blue;" onclick="searchByClick(\''+word+'\');"> '+word+'</font><font ';
												}   
												linkedContent += word+' ';
											}
											//alert(data);
											data = linkedContent; //가공한 데이터르 다시 data에 넣음
											//log(data);
											var whereIsNumber1 = data.indexOf("font-size:12px;'><br>")+21;
											var whereIsNumber2 = data.indexOf("번 째 기록");	
											var memoNumber = data.substring(whereIsNumber1, whereIsNumber2);
											memoAry[memoNumber] = data;
											//log(data);
											showMemo();
											memoIndicator++;
										}
									}
								}
								//반복문 success 콜배감수 종료
								 				 

									});//Jquery 종료
									}//반복문 종료***********************************************************
								}
							});

							}		//getMemoFromDBJquery end				
							function searchKey(id){
								var clickOrEnter = 0;
								if(id != 0 ||window.event.keyCode == 13){									
									var searchText = "";
									if(id != 0 ){
										searchText = id;
									} else{
										searchText = 
										document.getElementsByClassName('searchInput')[0].value;
									}
									showloading();
									var searchHashes = [];
									var searchWord = "";
									var content = searchText;
									var splitedArray = content.split(' ');
									var linkedContent = '';
									for(var word in splitedArray){
										word = splitedArray[word];
												if(word.indexOf('#') >= 0){ //해쉬태그만 검색함
													searchHashes.length++;
												searchHashes[searchHashes.length-1] = word; //배열의 크기를 조정해야 되는구나 쉬벌 ㅠㅠ
												memoIndicator = 0;
												$.ajax( //JQEURY 시작 *****************************
												{
													url : IndexURI,
													method : "GET",
							success : function(data){ //인덱스 로드
								var IndexNumber = Number(data);
								for(var z = IndexNumber; z > 0; z--){
									var loadUrl = baseURI+"memo/wrapper/memo"+(z-1)+"/content.json";                
									$.ajax({
										url : loadUrl,
										method : "GET",
										success : function(data){
											if(memoIndicator < IndexNumber){ 
												if(data != null){
										var findingWords = 0; //찾고있는 단어의 개수
										var splitedArray = data.split(' ');
										var t = 0 ;
										for(var word in splitedArray){
											if(data.indexOf(searchHashes[t]) >= 0 ){
												findingWords++;
												t++;
											}
										}												
												if(findingWords >= searchHashes.length){ //////////////// 찾는 단어가 몇개든 정확한지 
													flushHTML();
													var div = document.createElement("div");
													div.setAttribute("class", "paperNo"+memoIndicator);         
											//alert(memoIndicator+1+"번째 데이터 : "+data);
											var splitedArray = data.split(' ');
											var linkedContent = '';
											for(var word in splitedArray){
												word = splitedArray[word];                                              
													if(word.indexOf('#') >= 0){
													
													if(word.indexOf('<font') > 0) {//존재하면, 즉 끝에 있으면
														//log("있음!");
														word = word.substring(0, word.indexOf('<font'));
													}
													word = '<font style="color:blue;" onclick="searchByClick(\''+word+'\');"> '+word+'</font><font ';
												}                                            
							linkedContent += word+' ';
						}
						data = linkedContent;
						/* hashTag function */
						
						document.getElementsByClassName("paperContainer")[0].appendChild(div);               
						$('.paperNo'+memoIndicator).append(data);
						memoIndicator++;
					}
				}
			}
		}
	});
								}
							}
						});
											} else{
												showError();
												return ;

											}
										}
									}
								}
								function delAllMemo(){
									var param = {
										index : 0
									};
									$.ajax({
										url : memoURI,
										method : "PUT",
										data : JSON.stringify(param),
									success : function(data){ //인덱스 로드
										//alert("success");
										window.location.reload();
									}
									});
								}
							var memoIndicator = 0 ;
							//반복문이 0에서 IndexNumber까지 돌아가는 속도보다 콜백함수를 호출하는 시간이 더 뒤에 있어서
							//memoIndicator라는 변수를 만들고 이 변수에 맞춰서 로드함
							function log(str){
								console.log(str);
							}
							function editMemo(No){
								var searchText = document.getElementsByClassName('searchInput')[0].value;
								if(searchText.length != 0 ) //해쉬태그 검색이 실행중이라면 함수를 종료함
									return ; 
								var content = memoAry[No];
								var title = content.substring(33, content.indexOf('</font>'));
								var submitContent = "<p>"+content.substring(content.indexOf('<br>')+4, content.length);						
								location.href="edit.html?title="+encodeURIComponent(title,"UTF-8")+"&content="+encodeURIComponent(submitContent,"UTF-8")
								+"&index="+No;
							}
							function showMemo(){							
								flushHTML();
								var temp = 0 ; 
								var isUndefined = 0;
								for(var i = 0 ; i < memoAry.length; i++)
								{	
									//log(i+":"+memoAry[i]);
									isUndefined += memoAry[i]?1:0;			
								}
								var memoAryLength = Number(memoAry.length)-1;											
								//log(isUndefined+"/"+ Number(memoAryLength - EmptyAry));
								if(isUndefined < Number(memoAryLength - EmptyAry))
									return ; 
								flushHTML();
														
								for(var z = memoAry.length-1 ; z >0; z--){									
									var div = document.createElement("div");											
									div.setAttribute("class", "paperNo"+z);
									document.getElementsByClassName("paperContainer")[0].appendChild(div);		
									$('.paperNo'+z).append(memoAry[z]);
									$('.paperNo'+z).attr('onclick', 'editMemo('+z+');');
									
									//log(z + " : " +memoAry[z]);
									
								}
							}
							getMemoFromDBJquery();