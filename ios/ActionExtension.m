//
//  ActionExtension.m
//  BrowserExtension
//
//  Created by Pedro Paulo on 09/02/24.
//

#import <Foundation/Foundation.h>

#import "ActionExtension.h"
#import "ActionViewController.h"

@implementation ActionExtension

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(done) {
  [actionViewController done];
}

@end
