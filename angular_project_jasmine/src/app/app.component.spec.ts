import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// test suite (Group of testcases)
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // test case
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_jasmine' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project_jasmine');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('angular_project_jasmine');
  });

  it('should test add function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(2, -3)).toBe(-1);
    expect(app.add(-2, 3)).toBe(1);
    expect(app.add(-2, -3)).toBe(-5);
    // expect(actual).matcher(expectedValue)
  })
  it('should test mul function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.mul(4, 5)).toBe(20);
    expect(app.mul(4, -5)).toBe(-20);
    expect(app.mul(-4, -5)).toBe(20);
  })
  it('should test isEven function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isEven(2)).toBe('even')
    expect(app.isEven(2)).not.toBe('odd')
    expect(app.isEven(3)).toBe('odd')
    expect(app.isEven(3)).not.toBe('even')
  })
  it('should test sumofdigit function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.sumOfDigits(125)).toBe(8);
    expect(app.sumOfDigits(123)).toBe(6);
  })
  it('should test addNewCar function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cars).toEqual(['tata', 'honda'])
    expect(app.cars.length).toBe(2);
    expect(app.cars).toContain('tata');
    expect(app.cars).not.toContain('maruti');
    app.addNewCar('maruti');
    expect(app.cars).toEqual(['tata', 'honda', 'maruti'])
    expect(app.cars.length).toBe(3);
    expect(app.cars).toContain('tata');
    expect(app.cars).toContain('maruti');
    expect(app.cars).not.toContain('mahindra');
  })
});
