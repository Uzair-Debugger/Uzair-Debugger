#include <iostream>
#include <chrono>
using namespace ::std;
using namespace std::chrono;

long long unsigned first = 2, second = 2, third = 3, next_no;
bool i = true;

long long unsigned series(long long unsigned);

int main()
{
    long long unsigned num;
    cout << "Enter the number to find varionacci series: ";
    cin >> num;
    auto start = high_resolution_clock::now();
    series(num);
    auto end = high_resolution_clock::now();
    duration<double> duration=end-start;
    cout<<"\nTime taken: "<<duration.count()<<" seconds"<<endl;

    return 0;
}

long long unsigned series(long long unsigned num)
{

    if (num > 3)
    {
        if (i == true)
        {
            cout << first << " , " << second << " , " << third << " , ";
        }

        next_no = first + second;

        cout << next_no << " , ";

        first = second;
        second = third;
        third = next_no;
        i = false;

        return (series(--num));
    }
    else if(num==2)
        cout<<"\nInvalid Input! Your number should be greater than 3"<<endl;
        return 0;
}
