import { AccountController } from "./controllers/AccountController.js";
import { bgImagesController } from "./controllers/bgImagesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { ClockController } from "./controllers/ClockController.js";
import { ToDosController } from "./controllers/ToDosController.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, bgImagesController, QuotesController, WeatherController, ClockController, ToDosController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




