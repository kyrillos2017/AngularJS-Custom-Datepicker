import { IDate } from '../common/models/date.model';
import { DomHelper } from '../common/services/dom-appender/dom-appender.service';
import { UtilsService } from '../common/services/utils/utils.service';
import { CalendarMode } from '../common/types/calendar-mode';
import { CalendarValue } from '../common/types/calendar-value';
import { SingleCalendarValue } from '../common/types/single-calendar-value';
import { IDayCalendarConfig } from '../day-calendar/day-calendar-config.model';
import { DayCalendarComponent } from '../day-calendar/day-calendar.component';
import { IDayTimeCalendarConfig } from '../day-time-calendar/day-time-calendar-config.model';
import { ITimeSelectConfig } from '../time-select/time-select-config.model';
import { TimeSelectComponent } from '../time-select/time-select.component';
import { IDatePickerConfig, IDatePickerConfigInternal } from './date-picker-config.model';
import { IDpDayPickerApi } from './date-picker.api';
import { DatePickerService } from './date-picker.service';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, ValidationErrors, Validator } from '@angular/forms';
import { Moment, unitOfTime } from 'moment';
import { DateValidator } from '../common/types/validator.type';
import { MonthCalendarComponent } from '../month-calendar/month-calendar.component';
import { DayTimeCalendarComponent } from '../day-time-calendar/day-time-calendar.component';
import { INavEvent } from '../common/models/navigation-event.model';
import { SelectEvent } from '../common/types/selection-event.enum';
import { ISelectionEvent } from '../common/types/selection-event.model';
import * as ɵngcc0 from '@angular/core';
export declare class DatePickerComponent implements OnChanges, OnInit, AfterViewInit, ControlValueAccessor, Validator, OnDestroy {
    private readonly dayPickerService;
    private readonly domHelper;
    private readonly elemRef;
    private readonly renderer;
    private readonly utilsService;
    readonly cd: ChangeDetectorRef;
    get openOnFocus(): boolean;
    get openOnClick(): boolean;
    get areCalendarsShown(): boolean;
    set areCalendarsShown(value: boolean);
    get selected(): Moment[];
    set selected(selected: Moment[]);
    get currentDateView(): Moment;
    set currentDateView(date: Moment);
    isInitialized: boolean;
    config: IDatePickerConfig;
    mode: CalendarMode;
    placeholder: string;
    disabled: boolean;
    displayDate: SingleCalendarValue;
    theme: string;
    minDate: SingleCalendarValue;
    maxDate: SingleCalendarValue;
    minTime: SingleCalendarValue;
    maxTime: SingleCalendarValue;
    open: EventEmitter<void>;
    close: EventEmitter<void>;
    onChange: EventEmitter<CalendarValue>;
    onGoToCurrent: EventEmitter<void>;
    onLeftNav: EventEmitter<INavEvent>;
    onRightNav: EventEmitter<INavEvent>;
    onSelect: EventEmitter<ISelectionEvent>;
    calendarContainer: ElementRef;
    dayCalendarRef: DayCalendarComponent;
    monthCalendarRef: MonthCalendarComponent;
    dayTimeCalendarRef: DayTimeCalendarComponent;
    timeSelectRef: TimeSelectComponent;
    componentConfig: IDatePickerConfigInternal;
    dayCalendarConfig: IDayCalendarConfig;
    dayTimeCalendarConfig: IDayTimeCalendarConfig;
    timeSelectConfig: ITimeSelectConfig;
    hideStateHelper: boolean;
    inputValue: CalendarValue;
    isFocusedTrigger: boolean;
    inputElementValue: string;
    calendarWrapper: HTMLElement;
    appendToElement: HTMLElement;
    inputElementContainer: HTMLElement;
    popupElem: HTMLElement;
    handleInnerElementClickUnlisteners: Function[];
    globalListenersUnlisteners: Function[];
    validateFn: DateValidator;
    api: IDpDayPickerApi;
    selectEvent: typeof SelectEvent;
    _areCalendarsShown: boolean;
    _selected: Moment[];
    _currentDateView: Moment;
    private onOpenDelayTimeoutHandler;
    constructor(dayPickerService: DatePickerService, domHelper: DomHelper, elemRef: ElementRef, renderer: Renderer2, utilsService: UtilsService, cd: ChangeDetectorRef);
    onClick(): void;
    onBodyClick(): void;
    onScroll(): void;
    writeValue(value: CalendarValue): void;
    registerOnChange(fn: any): void;
    onChangeCallback(_: any, changedByInput: boolean): void;
    registerOnTouched(fn: any): void;
    onTouchedCallback(): void;
    validate(formControl: FormControl): ValidationErrors;
    processOnChangeCallback(selected: Moment[] | string): CalendarValue;
    initValidators(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    setElementPositionInDom(): void;
    setInputElementContainer(): void;
    handleInnerElementClick(element: HTMLElement): void;
    init(): void;
    inputFocused(): void;
    inputBlurred(): void;
    showCalendars(): void;
    hideCalendar(): void;
    onViewDateChange(value: CalendarValue): void;
    dateSelected(date: IDate, granularity: unitOfTime.Base, type: SelectEvent, ignoreClose?: boolean): void;
    onDateClick(): void;
    onKeyPress(event: KeyboardEvent): void;
    moveCalendarTo(date: SingleCalendarValue): void;
    onLeftNavClick(change: INavEvent): void;
    onRightNavClick(change: INavEvent): void;
    startGlobalListeners(): void;
    stopGlobalListeners(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatePickerComponent, "dp-date-picker", never, { "mode": "mode"; "placeholder": "placeholder"; "disabled": "disabled"; "config": "config"; "displayDate": "displayDate"; "theme": "theme"; "minDate": "minDate"; "maxDate": "maxDate"; "minTime": "minTime"; "maxTime": "maxTime"; }, { "open": "open"; "close": "close"; "onChange": "onChange"; "onGoToCurrent": "onGoToCurrent"; "onLeftNav": "onLeftNav"; "onRightNav": "onRightNav"; "onSelect": "onSelect"; }, never, never>;
}

//# sourceMappingURL=date-picker.component.d.ts.map