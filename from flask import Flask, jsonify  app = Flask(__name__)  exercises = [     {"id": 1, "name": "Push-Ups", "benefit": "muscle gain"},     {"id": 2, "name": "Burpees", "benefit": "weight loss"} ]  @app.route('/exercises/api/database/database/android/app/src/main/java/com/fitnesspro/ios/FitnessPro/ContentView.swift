import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Fitness Pro")
                .font(.title)
            ExerciseListView()
        }
    }
}
