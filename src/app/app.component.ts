import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CtaComponent } from './components/cta/cta.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TripsComponent } from "./components/trips/trips.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, HeaderComponent, NavigationComponent, FooterComponent, FeaturedComponent, CtaComponent, HowItWorksComponent, TestimonialsComponent, PricingComponent, TripsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Goglobe_Travels';
}
