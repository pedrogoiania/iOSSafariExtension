//
//  ActionViewController.m
//  ActionExtension
//
//  Created by Pedro Paulo on 08/02/24.
//

#import "ActionViewController.h"
#import <MobileCoreServices/MobileCoreServices.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <WebKit/WebKit.h>


@interface ActionViewController ()

@property(strong,nonatomic) IBOutlet UIImageView *imageView;
@property (strong, nonatomic) WKWebView *webView;

@end

ActionViewController * actionViewController = nil;

// JavaScript string
NSString *js = @"function adjustFontSize(increase) {console.log(\"call ajustscrip with success\");var body = document.body;var currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));if (increase) {currentSize += 2; // Increase font size by 2px} else {currentSize -= 2; // Decrease font size by 2px}body.style.fontSize = currentSize + 'px';}"; // Place your full JS function here

@implementation ActionViewController
- (void)loadView {
    NSURL *jsCodeLocation;
  
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
  
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                 moduleName:@"BrowserExtension"
                                                 initialProperties:@{@"browserExtension":@"true"}
                                                 launchOptions:nil];
  
    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
                      self.view = rootView;
  
    actionViewController = self;
  
    WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
    WKUserContentController *userContentController = [[WKUserContentController alloc] init];

//    WKUserScript *script = [[WKUserScript alloc] initWithSource:js injectionTime:WKUserScriptInjectionTimeAtDocumentStart forMainFrameOnly:YES];

//  [userContentController addUserScript:script];
  configuration.userContentController = userContentController;

  self.webView = [[WKWebView alloc] initWithFrame:self.view.bounds configuration:configuration];

}

- (void)done {
  NSLog(@"increase called");
  [self.extensionContext completeRequestReturningItems:self.extensionContext.inputItems completionHandler:nil];
}

// Method to increase font size
- (void)increaseFontSizeInPage {
  NSString *jsCommand = @"document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) * 1.1; console.log(\" called method\")";
  
      NSLog(@"increase called");
     [self.webView evaluateJavaScript:jsCommand completionHandler:^(id _Nullable result, NSError * _Nullable error) {
       
       
       if(result) {
         NSLog(@"nice result");
       }
       
       if (error) {
             NSLog(@"Error zooming in: %@", error.localizedDescription);
         }
     }];
}

// Method to decrease font size
- (void)decreaseFontSizeInPage {
  NSString *jsCommand = @"document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) / 1.1;";
      [self.webView evaluateJavaScript:jsCommand completionHandler:^(id _Nullable result, NSError * _Nullable error) {
          if (error) {
              NSLog(@"Error zooming out: %@", error.localizedDescription);
          }
      }];
}

@end

