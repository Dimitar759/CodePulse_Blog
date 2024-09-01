using CodePulse.API.Models.Domain;

namespace CodePulse.API.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
        Task<IEnumerable<Category>> GetAllAsync();
        //Task<Category> UpdateCategory(string id);
        Task<Category?> GetCategoryByAdAsync(Guid id);
        Task<Category?> UpdateAsync(Category category);
    }
}
 