import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker-inline-calendar-example',
  templateUrl: './datepicker-inline-calendar-example.component.html',
  styleUrls: ['./datepicker-inline-calendar-example.component.scss']
})
export class DatepickerInlineCalendarExampleComponent {
  selected!: Date | null;
}
