package msku.ceng.madlab.week2;

import android.os.Bundle;
import android.widget.ListView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;
import java.util.List;

public class CustomAdapterActivity extends AppCompatActivity {
    final List<Animal> animals=new ArrayList<Animal>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.custom_adapter_activity);
        //final List<Animal> animals=new ArrayList<Animal>();
        animals.add(new Animal("Dog",R.mipmap.dog));
        animals.add(new Animal("Butterfly",R.mipmap.butterfly));
        final ListView listView=(ListView) findViewById(R.id.listview);
        AnimalAdapter animalAdapter=new AnimalAdapter(this,animals);
        listView.setAdapter(animalAdapter);



    }
}