const ArrayFamily   = ['Pink Family','Green Family','Purple Family'];
const Color         = ['#ff0080','#008000','#8000ff'];
const ColorOption   = ['MTM4','MTM0','MTMz']
var resultArr = []; 
const xhttp = new XMLHttpRequest();

for( let i =0;i<ArrayFamily.length;i++){
    let options = {category_id:'MA==',color_name: ArrayFamily[i],color_code:Color[i],coloOption:ColorOption[i],page_type:'home',brand_id:0,page:1,from_page:'',fit_type:''}; 
	let formData = new FormData();
	formData.append("category_id", 'MA==');
	formData.append("color_name", ArrayFamily[i]);
	formData.append("color_code", Color[i]);
	formData.append("coloOption", ColorOption[i]);
	formData.append("page_type", 'home');
	formData.append("brand_id", 0);
	formData.append("page", 1);
	formData.append("from_page", '');
	formData.append("fit_type", '');
  
  xhttp.onload = function() {
	postMessage(this.responseText);
  }
  
  xhttp.open("POST", "http://example.com/getProductListingByFilters",false);
  xhttp.send(formData);

}