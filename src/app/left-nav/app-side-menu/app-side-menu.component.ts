import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { EventBusService } from '../../common/services/event-bus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './app-side-menu.component.html',
  styleUrls: ['./app-side-menu.component.scss']
})
export class AppSideMenuComponent implements OnInit {
  public menus = [
    {
      id: "1",
      name: "权限管理",
      isOpen: false,
      icon:'fa-bars',
      children: [
        { name: "组织架构", icon: 'fa-male', route: 'org/orgmng'},
        { name: "用户管理", icon: 'fa-bug', route: 'user/usertable/page/1' },
        { name: "角色管理", icon: 'fa-bus', route: 'role/roletable/page/1' },
        { name: "权限管理", icon: 'fa-send', route: 'permission/permissiontable/page/1' }
      ]
    },
    {
      id: "2",
      name: "内容管理",
      isOpen: false,
      icon:'fa-magic',
      children: [
        { name: "文章管理", icon: 'fa-mobile', route: 'post/posttable/page/1' },
        { name: "评论管理", icon: 'fa-minus', route: 'comment/commenttable/page/1' }
      ]
    },
    {
      id: "3",
      name: "系统监控",
      isOpen: false,
      icon:'fa-wrench',
      children: [
        { name: "系统状态", icon: 'fa-line-chart', route: 'sys/sysmonitor' },
        { name: "高德地图", icon: 'fa-map-marker', route: 'map/map' }
      ]
    },
    {
      id: "4",
      name: "业务接待",
      isOpen: false,
      icon:'fa-wrench',
      children: [
        { name: "客户接待",icon: 'fa-male', route: 'auction/auction' },
        { name: "提交结算",icon:'fa-send',route:'auction/auction' },
        { name: "修理估价",icon:'fa-calculator',route:'base/base' },
        { name: "维修业务查询",icon:'fa-search',route:'base/base' },
        { name: "维修组合管理",icon:'fa-bug',route:'base/base' },
        { name: "维修项目管理",icon:'fa-wrench',route:'base/base' },
        { name: "交车",icon:'fa-car',route:'base/base' }
      ]
    },
    {
      id: "5",
      name: "维修结算",
      isOpen: false,
      icon:'fa-male',
      children: [
        { name: "费用结算",icon:'fa-calculator',route:'base/base' },
        { name: "收款作业",icon:'fa-dollar',route:'base/base' },
        { name: "开票登记",icon:'fa-send',route:'base/base' },
        { name: "取消结算",icon:'fa-stop',route:'base/base' },
        { name: "预收款管理",icon:'fa-wrench',route:'base/base' },
        { name: "结算关单",icon:'fa-minus',route:'base/base' }
      ]
    }
  ];

  public isCollapse: boolean = false;

  constructor(private elementRef: ElementRef, private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.eventBusService.topToggleBtn.subscribe(value => {
      this.toggleMenuAll(value);
    });
  }

  private toggleMenuAll(isCollapse: boolean): void {
    this.isCollapse = isCollapse;
    this.menus.forEach(item => {
      item.isOpen = false;
    })
  }

  public toggleMenuItem(event, menu): void {
    menu.isOpen = !menu.isOpen;
    //折叠状态下只能打开一个二级菜单层
    // if (this.isCollapse) {
    let tempId = menu.id;
    this.menus.forEach(item => {
      if (item.id !== tempId) {
        item.isOpen = false;
      }
    });
    // }
  }

  @HostListener('body:click', ['$event'])
  public onBodyClick(event): void {
    if (this.isCollapse && (event.clientX > 75)) {
      this.menus.forEach(item => {
        item.isOpen = false;
      });
    }
  }
}
