import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from "./components/layout/sidebar/sidebar.component";
import { UserInfoComponent } from './components/dashboard/user-info/user-info.component';
import { EnrollmentComponent } from './components/dashboard/enrollment/enrollment.component';
import { TrendingItemsComponent } from "./components/dashboard/trending-items/trending-items.component";
import { PeakTimesComponent } from "./components/dashboard/peak-times/peak-times.component";
import { SkillsComponent } from "./components/dashboard/skills/skills.component";
import { ResourcesComponent } from "./components/dashboard/resources/resources.component";
import { WatchingOverviewComponent } from "./components/dashboard/watching-overview/watching-overview.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { CompletedComponent } from "./components/dashboard/completed/completed.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, UserInfoComponent, EnrollmentComponent, TrendingItemsComponent, PeakTimesComponent, SkillsComponent, ResourcesComponent, WatchingOverviewComponent, FooterComponent, CompletedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
