$(document).ready(function()
{
    $('#inscription').click(function()
        {
            window.location.href = 'views/inscription.php';
        });

    $('#connecter').click(function()
    {
        if($('#identifiant').val().trim().length === 0)
        {
            alert("Veuillez remplir l'identifiant...!\nMerci...!");
        }
        else if($('#password').val().trim().length === 0)
        {
            alert("Veuillez entrer votre mot de passe...!\nMerci...!");
        }
        else
        {
            let donnees = {
                identifiant: $('#identifiant').val(),
                password: $('#password').val()
            };
            
            $.post('http://localhost/Interfaces-portfolio/controllers/login', donnees, function(data)
            {
                if(data == '1')
                {
                    window.location.href = 'views/informations.php';
                }
                else
                {
                    alert(data);
                }
            });
        }
    });
});
