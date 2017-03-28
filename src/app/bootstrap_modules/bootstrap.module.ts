import {
    NgbAccordionModule,
    NgbAlertModule,
    // NgbButtonsModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbTabsetModule,
    NgbTimepickerModule,
    NgbTooltipModule,
    NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import { ModuleWithProviders, NgModule } from '@angular/core';
const NGB_MODULES = [
    NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
    NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule,
    NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule
];

@NgModule({
    imports: [
        NgbAlertModule.forRoot(), NgbCollapseModule.forRoot(), NgbProgressbarModule.forRoot(),
        NgbTooltipModule.forRoot(), NgbTypeaheadModule.forRoot(), NgbAccordionModule.forRoot(), NgbCarouselModule.forRoot(),
        NgbDatepickerModule.forRoot(), NgbDropdownModule.forRoot(), NgbModalModule.forRoot(), NgbPaginationModule.forRoot(),
        NgbPopoverModule.forRoot(), NgbProgressbarModule.forRoot(), NgbRatingModule.forRoot(), NgbTabsetModule.forRoot(),
        NgbTimepickerModule.forRoot(), NgbTooltipModule.forRoot()
    ],
    exports: NGB_MODULES
})
export class CNgbRootModule {
}

// tslint:disable-next-line:max-classes-per-file
@NgModule({ imports: NGB_MODULES, exports: NGB_MODULES })
export class CNgbModule {
    static forRoot(): ModuleWithProviders { return { ngModule: CNgbRootModule }; }
}