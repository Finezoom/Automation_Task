import { test, expect } from '@playwright/test';

test('BMI Cal', async ({ page }) => {
    function calculateBMI(height: number, weight: number): number {
        const heightInMeters: number = height / 100;
        const bmi: number = weight / (heightInMeters * heightInMeters);
        return bmi;
    }
    function getBMICategory(bmi: number): string {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) { 
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
    const gender: string = 'male';
    const age: number = 20;
    const height: number = 170;
    const weight: number = 50;
    const bmi: number = calculateBMI(height, weight);
    const bmiCategory: string = getBMICategory(bmi);
    const profileReport: Record<string, any> = {
        gender,
        age,
        height,
        weight,
        bmi,
        bmiCategory,
    };

    if (age < 2 || age > 120) {
        console.error('Invalid age. Age must be between 2 and 120.');
    } else {
        console.log('Profile Report:');
        console.log('----------------');
        console.log('Gender:', profileReport.gender);
        console.log('Age:', profileReport.age);
        console.log('Height:', profileReport.height, 'cm');
        console.log('Weight:', profileReport.weight, 'kg');
        console.log('BMI:', profileReport.bmi.toFixed(2));
        console.log('BMI Category:', profileReport.bmiCategory);
    }

});