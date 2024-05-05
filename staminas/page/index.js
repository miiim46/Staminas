



  
(() => {
  

  let start = 0;
  let rec = 0;
  let click = 0;



let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit() {

    
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x :(192-120)/2,
      y: 140,
      w: 120,
      h: 120,
      radius: 100,
      normal_color: 0x316c73,
      press_color: 0x549fa8,
      text: 'Старт',
      click_func: () => {
        
         hmApp.gotoPage({
          url: "page/index2"
        });
        
      }
      
    })

    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 40,
      y: 340,
      w: 120,
      h: 50,
      color: 0xffffff,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'Рекорд:'
    })

    const text1 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 40,
      y: 360,
      w: 120,
      h: 50,
      color: 0xffffff,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: rec
    })
      
      

  },
  onDestroy() {

    

  }
});

})();
