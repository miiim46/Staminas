

 


  let randomy = 0; 
  let time = 30;
  let rec = 0;
  let click = 0;
  let randomx = 0;
  let MINX = 0;
  let MINY = 0;
  
(() => {





let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit() {
    
    randomy = (time*click)+MINY;
            randomx = (time*click)+MINX;
    
    setTimeout(
      () => {
        time = time-1;
        
        MINY = (4*click)*-1;
        
        randomy = (time*click)+MINY;
        
        
        img_button.setProperty(hmUI.prop.MORE, {
          y: randomy,
          text: click
        });
        text1.setProperty(hmUI.prop.MORE, {
          text: time
          });
          
      },
      1000
    );
   
    
    
      setTimeout(
        () => {
          time = time-1;
        
          MINY = (4*click)*-1;
          randomy = (time*click)+MINY;
         
          ;
            img_button.setProperty(hmUI.prop.MORE, {
              y: randomy,
              text: click
            });
            text1.setProperty(hmUI.prop.MORE, {
              text: time
              });
           
        },
        2*1000
      );
      
    
    
        setTimeout(
          () => {
            time = time-1;
           
            MINY = (4*click)*-1;
            randomy = (time*click)+MINY;
           
            img_button.setProperty(hmUI.prop.MORE, {
              y: randomy,
              text: click
            });
            text1.setProperty(hmUI.prop.MORE, {
              text: time
              });
         
            
          },
          3*1000
        );
        setTimeout(
          () => {
            time = time-1;
            
            MINY = (4*click)*-1;
            randomy = (time*click)-MINY;
            
            img_button.setProperty(hmUI.prop.MORE, {
              y: randomy,
              text: click
            });
            text1.setProperty(hmUI.prop.MORE, {
              text: time
              });
            
            
          },
          4*1000
        );
       
        
        
          setTimeout(
            () => {
              time = time-1;
            
              MINY = (100+click)*-1;
              randomy = (time*click)+MINY;
              
              img_button.setProperty(hmUI.prop.MORE, {
                y: randomy,
                text: click
              });
              text1.setProperty(hmUI.prop.MORE, {
                text: time
                });
              
             
            },
            5*1000
          );
          
        
        
            setTimeout(
              () => {
                time = time-1;
                
                          MINY = (120+(4*click))*-1;
                          randomy = (time*click)+MINY;
                          
                          img_button.setProperty(hmUI.prop.MORE, {
                            y: randomy,
                            text: click
                          });
                          text1.setProperty(hmUI.prop.MORE, {
                            text: time
                            });
             
               
              },
              6*1000
            );
            setTimeout(
              () => {
                time = time-1;
                
                MINY = (120+(4*click))*-1;
                          randomy = (time*click)+MINY;
                          
                          img_button.setProperty(hmUI.prop.MORE, {
                            y: randomy,
                            text: click
                          });
                          text1.setProperty(hmUI.prop.MORE, {
                            text: time
                            });
              
                
              },
              7*1000
            );
           
            
            
              setTimeout(
                () => {
                  time = time-1;
                  
                  MINY = (120+(7*click))*-1;
                  randomy = (time*click)+MINY;
                  img_button.setProperty(hmUI.prop.MORE, {
                    y: randomy,
                    text: click
                  });
                  text1.setProperty(hmUI.prop.MORE, {
                    text: time
                    });
             
                 
                },
                8*1000
              );
              
            
            
                setTimeout(
                  () => {
                    time = time-1;
                  
                    MINY = (150+(7*click))*-1;
                          randomy = (time*click)+MINY;
                          console.log(randomy);
                          img_button.setProperty(hmUI.prop.MORE, {
                            y: randomy,
                            text: click
                          });
                          text1.setProperty(hmUI.prop.MORE, {
                            text: time
                            });
              
                    
                  },
                  9*1000
                );
                setTimeout(
                  () => {
                    time = time-1;
                    
                    MINY = (150+(10*click))*-1;
                    randomy = (time*click)+MINY;
                    console.log(randomy);
                    img_button.setProperty(hmUI.prop.MORE, {
                      y: randomy,
                      text: click
                    });
                    text1.setProperty(hmUI.prop.MORE, {
                      text: time
                      });
             
                    
                  },
                  10*1000
                );
               
                
                
                  setTimeout(
                    () => {
                      time = time-1;
                      
                      MINY = (150+(15*click))*-1;
                      randomy = (time*click)+MINY;
                      console.log(randomy);
                      img_button.setProperty(hmUI.prop.MORE, {
                        y: randomy,
                        text: click
                      });
                      text1.setProperty(hmUI.prop.MORE, {
                        text: time
                        });
             
                      
                    },
                    11*1000
                  );
                  
                
                
                    setTimeout(
                      () => {
                        time = time-1;
                       
                       
                        MINY = (150+(16*click))*-1;
                        randomy = (time*click)+MINY;
                       
                        img_button.setProperty(hmUI.prop.MORE, {
                          y: randomy,
                          text: click
                        });
                        text1.setProperty(hmUI.prop.MORE, {
                          text: time
                          });
              
                       
                      },
                      12*1000
                    );
                    setTimeout(
                      () => {
                        time = time-1;
                        MINY = (150+(15*click))*-1;
                          randomy = (time*click)+MINY;
                         
                          img_button.setProperty(hmUI.prop.MORE, {
                            y: randomy,
                            text: click
                          });
                          text1.setProperty(hmUI.prop.MORE, {
                            text: time
                            });
             
                        
                      },
                      13*1000
                    );
                   
                    
                    
                      setTimeout(
                        () => {
                          time = time-1;
                          MINY = (150+(10*click))*-1;
                            randomy = (time*click)+MINY;
                           
                            img_button.setProperty(hmUI.prop.MORE, {
                              y: randomy,
                              text: click
                            });
                            text1.setProperty(hmUI.prop.MORE, {
                              text: time
                              });
             
                         
                        },
                        14*1000
                      );
                      
                    
                    
                        setTimeout(
                          () => {
                            time = time-1;
                        MINY = (150+(10*click))*-1;
                          randomy = (time*click)+MINY;
                         
                          img_button.setProperty(hmUI.prop.MORE, {
                            y: randomy,
                            text: click
                          });
                          text1.setProperty(hmUI.prop.MORE, {
                            text: time
                            });
             
                           
                          },
                          15*1000
                        );
                        setTimeout(
                          () => {
                            time = time-1;
                            MINY = (150+(15*click))*-1;
                              randomy = (time*click)+MINY;
                             
                              img_button.setProperty(hmUI.prop.MORE, {
                                y: randomy,
                                text: click
                              });
                              text1.setProperty(hmUI.prop.MORE, {
                                text: time
                                });
                           
                          },
                          16*1000
                        );
                       
                        
                        
                          setTimeout(
                            () => {
                              time = time-1;
                        MINY = (150+(10*click))*-1;
                          randomy = (time*click)+MINY;
                         
                          img_button.setProperty(hmUI.prop.MORE, {
                            y: randomy,
                            text: click
                          });
                          text1.setProperty(hmUI.prop.MORE, {
                            text: time
                            });
              
             
                            },
                            17*1000
                          );
                          
                        
                        
                            setTimeout(
                              () => {
                                time = time-1;
                                MINY = (150+(10*click))*-1;
                                  randomy = (time*click)+MINY;
                                 
                                  img_button.setProperty(hmUI.prop.MORE, {
                                    y: randomy,
                                    text: click
                                  });
                                  text1.setProperty(hmUI.prop.MORE, {
                                    text: time
                                    });
                              },
                              18*1000
                            );
                            setTimeout(
                              () => {
                                time = time-1;
                                MINY = (150+(15*click))*-1;
                                  randomy = (time*click)+MINY;
                                 
                                  img_button.setProperty(hmUI.prop.MORE, {
                                    y: randomy,
                                    text: click
                                  });
                                  text1.setProperty(hmUI.prop.MORE, {
                                    text: time
                                    });
                              },
                              19*1000
                            );
                           
                            
                            
                              setTimeout(
                                () => {
                                  time = time-1;
                                  MINY = (150+(10*click))*-1;
                                    randomy = (time*click)+MINY;
                                   
                                    img_button.setProperty(hmUI.prop.MORE, {
                                      y: randomy,
                                      text: click
                                    });
                                    text1.setProperty(hmUI.prop.MORE, {
                                      text: time
                                      });
                                  
                                },
                                20*1000
                              );
                              
                            
                            
                                setTimeout(
                                  () => {
                                    time = time-1;
                                    MINY = (150+(5*click))*-1;
                                      randomy = (time*click)+MINY;
                                     
                                      img_button.setProperty(hmUI.prop.MORE, {
                                        y: randomy,
                                        text: click
                                      });
                                      text1.setProperty(hmUI.prop.MORE, {
                                        text: time
                                        });
                                  },
                                  21*1000
                                );
                                setTimeout(
                                  () => {
                                    time = time-1;
                                    MINY = (150+(5*click))*-1;
                                      randomy = (time*click)+MINY;
                                     
                                      img_button.setProperty(hmUI.prop.MORE, {
                                        y: randomy,
                                        text: click
                                      });
                                      text1.setProperty(hmUI.prop.MORE, {
                                        text: time
                                        });
                                    
                                  },
                                  22*1000
                                );
                               
                                
                                
                                  setTimeout(
                                    () => {
                                      time = time-1;
                                      MINY = (150+(5*click))*-1;
                                        randomy = (time*click)+MINY;
                                       
                                        img_button.setProperty(hmUI.prop.MORE, {
                                          y: randomy,
                                          text: click
                                        });
                                        text1.setProperty(hmUI.prop.MORE, {
                                          text: time
                                          });
                                      
                                    },
                                    23*1000
                                  );
                                  
                                
                                
                                    setTimeout(
                                      () => {
                                        time = time-1;
                                        MINY = (150+(5*click))*-1;
                                          randomy = (time*click)+MINY;
                                         
                                          img_button.setProperty(hmUI.prop.MORE, {
                                            y: randomy,
                                            text: click
                                          });
                                          text1.setProperty(hmUI.prop.MORE, {
                                            text: time
                                            });
                                        
                                      },
                                      24*1000
                                    );
                                    setTimeout(
                                      () => {
                                        time = time-1;
                                        MINY = (150+(2*click))*-1;
                                          randomy = (time*click)+MINY;
                                         
                                          img_button.setProperty(hmUI.prop.MORE, {
                                            y: randomy,
                                            text: click
                                          });
                                          text1.setProperty(hmUI.prop.MORE, {
                                            text: time
                                            });
                                        
                                      },
                                      25*1000
                                    );
                                   
                                    
                                    
                                      setTimeout(
                                        () => {
                                          time = time-1;
                                    MINY = (150+(2*click))*-1;
                                      randomy = (time*click)+MINY;
                                     
                                      img_button.setProperty(hmUI.prop.MORE, {
                                        y: randomy,
                                        text: click
                                      });
                                      text1.setProperty(hmUI.prop.MORE, {
                                        text: time
                                        });
                                        },
                                        26*1000
                                      );
                                      
                                    
                                    
                                        setTimeout(
                                          () => {
                                            time = time-1;
                                    MINY = (150+(1*click))*-1;
                                      randomy = (time*click)+MINY;
                                     
                                      img_button.setProperty(hmUI.prop.MORE, {
                                        y: randomy,
                                        text: click
                                      });
                                      text1.setProperty(hmUI.prop.MORE, {
                                        text: time
                                        });
                                          },
                                          27*1000
                                        );
                                        setTimeout(
                                          () => {
                                            time = time-1;
                                            MINY = (0+(1*click))*-1;
                                              randomy = (time*click)+MINY;
                                             
                                              img_button.setProperty(hmUI.prop.MORE, {
                                                y: randomy,
                                                text: click
                                              });
                                              text1.setProperty(hmUI.prop.MORE, {
                                                text: time
                                                });
                                          },
                                          28*1000
                                        );
                                       
                                        
                                        
                                          setTimeout(
                                            () => {
                                              time = time-1;
                                    MINY = (0+(1*click))*-1;
                                      randomy = (time*click)+MINY;
                                     
                                      img_button.setProperty(hmUI.prop.MORE, {
                                        y: randomy,
                                        text: click
                                      });
                                      text1.setProperty(hmUI.prop.MORE, {
                                        text: time
                                        });
                                              
                                            },
                                            29*1000
                                          );
                                          
                                        
                                        
                                            setTimeout(
                                              () => {
                                                time = time-1;
                                    MINY = (0+(1*click))*-1;
                                      randomy = (time*click)+MINY;
                                     
                                      img_button.setProperty(hmUI.prop.MORE, {
                                        y: randomy,
                                        text: click
                                      });
                                      text1.setProperty(hmUI.prop.MORE, {
                                        text: time
                                        });
                                                
                                              },
                                              30*1000
                                            );
                                            setTimeout(
                                              () => {
                                                
                                                
                                                hmApp.gotoPage({
                                                  url: "page/index"
                                                });
                                                

                                                  
                                              },
                                              30*1000
                                            );
      const img_button = hmUI.createWidget(hmUI.widget.BUTTON, {
      x :(192-120)/2,
      y: randomy,
      w: 120,
      h: 120,
      radius: 100,
      normal_color: 0x316c73,
      press_color: 0x549fa8,
      text: click,
      click_func: () => {
        click = click+1;
          
      
      
      }
      
    })

    
      


    

    const text3 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 40,
      y: 20,
      w: 120,
      h: 50,
      color: 0xffffff,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'Время:'
    })

    const text1 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 40,
      y: 40,
      w: 120,
      h: 50,
      color: 0xffffff,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: time
    })

    
      
      

  },
  onDestroy() {

    

  }
});

})();
