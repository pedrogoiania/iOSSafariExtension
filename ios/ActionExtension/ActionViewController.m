//
//  ActionViewController.m
//  ActionExtension
//
//  Created by Pedro Paulo on 08/02/24.
//

#import "ActionViewController.h"
#import <MobileCoreServices/MobileCoreServices.h>
//
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface ActionViewController ()

@property(strong,nonatomic) IBOutlet UIImageView *imageView;

@end

ActionViewController * actionViewController = nil;

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
}

- (void)done {
  [self dismissViewControllerAnimated:YES completion:nil];
}

@end

